import { type NextRequest } from 'next/server'

async function getDataFromFile (version, name){
    const excetTojson =  require( 'convert-excel-to-json');
    const result = excetTojson({
        sourceFile: `./data/buspropfiles/${version}/${name}`,
        
    })
    const keys = Object.keys(result);
    
const sections : any = [];
  let currentSection : any = {};
  let isTable = false;
  const finalData = result[keys[0]];
  finalData.forEach(( entry , index) => {
    if (entry.A.includes("<sectionMarker>")) {
      if (Object.keys(currentSection).length !== 0) {
        sections.push(currentSection);
        currentSection = {};
        isTable = false;
      }
    } else if (entry.A === 'type') {
      currentSection["type"] = entry.B
      if(entry.B === "table" ) {
        isTable = true;
        currentSection["tableContent"] = []
        currentSection.tableColumn = Object.keys(finalData[index+1]).length;
      } 
    }else if(entry.A.includes("sectionHeading")){
        currentSection[entry.A] = entry.B;
    }else if(isTable){
      const row = Object.keys(entry).map(key => entry[key])
      currentSection.tableContent.push(row);
      
      const totalLen = Object.keys(entry).reduce((acc , cu)=>{
        acc += entry[cu].length;
        return acc;
      },0)
      const columWidths = Object.keys(entry).map(key => {
        return ((entry[key].length * 100) / totalLen) 
      })
      if(currentSection["columWidths"]){
        const averageColumnWith =  currentSection.columWidths.map((v , index) => {
          return (columWidths[index] + v) / 2
        })
        currentSection.columWidths = averageColumnWith;
      } else{
        currentSection.columWidths = columWidths;
      }
    }else{
      currentSection[entry.A] = entry.B;
    }
  });
  
  // Push the last section
  if (Object.keys(currentSection).length !== 0) {
    sections.push(currentSection);
  }

    return sections;
}

export async function GET(req: NextRequest) {
  try {
    // Example usage:
    const version = req.nextUrl.searchParams.get("version");
    const name = req.nextUrl.searchParams.get("name");
    const data = await getDataFromFile(version , name);

    return Response.json({success : true, data : data});
  } catch (err: any) {
    return Response.json({ message: err.message ?? "Internal Server Error", success: false });
  } 
}


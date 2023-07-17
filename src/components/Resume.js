import ResumePDF from '../files/joelresume.pdf'



function Resume(props){
    return (

            <div style={{ height: "800px", overflow: "auto", display:"flex",justifyContent:"center",marginTop:"20px" }}>
                <object 
                    data={ResumePDF}
                    type="application/pdf" 
                    width="80%" 
                    height="90%"
                    style={{border:"2px solid black"}}>
                    <p>It appears you don't have a PDF plugin for this browser. 
                    You can <a href="your-resume-url.pdf">click here to download the PDF file.</a></p>
                </object>
            </div>
    )
}

export default Resume;
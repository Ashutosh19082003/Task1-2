import React from 'react'
import './Page4.css'
const Page4 = () => {
    return (
        <div>
            <div className='nav-assignment'>

                <ul>
                    <li><a href="">All</a></li>
                    <li><a href="">New</a></li>
                    <li> <a href="">In Progress</a></li>
                    <li><a href=""> Completed</a></li>
                    <li><a href=""> Over Due</a></li>
                </ul>
            </div>
            <div className='searcha-filter'>
                <div className='searcha-box'>
                    <input type="text" placeholder='Search' />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>

                <div className='filt'>
                <i class="fa-solid fa-filter"></i>
                <h2>FILTERS</h2>
            </div>
            </div>

            <div className='page-btn'>
                <div className='left'><p><i class="fa-solid fa-arrow-left"></i></p></div>
             <div className='page'><p>1</p></div>
             <div className='page'> <p>2</p></div>
             <div className='page'><p>3</p></div>
             <div className='page'><p>4</p></div>
             <div className='page'><p>5</p></div>
             <div className='right' style={{paddingLeft:"18px"}}><p><i class="fa-solid fa-arrow-right"></i></p></div>
            </div>

        <div className='assignment'>
          <div className='assignment-name'>
           <h2>FDN-04-DAY-08</h2>
          </div>
          <div className='coding'>
                <h4>Coding</h4>
          </div>
        </div>
        <div className='detail'>
         <div className='author'style={{    display: "flex"}}>
            <div className='short-form'>
               <h6>VL</h6>
            </div>
            <h3>Vritti Lalwani</h3>
         </div>
         <div className='date'>
         <i class="fa-regular fa-calendar"></i>
         <p>30 Mar, 2022 at 12:30 PM</p>
         </div>
         <div className='conclude'>
         <i class="fa-regular fa-calendar-check" style={{    paddingLeft: "4px"}}></i>
         <p>Concludes on -- - --</p> 
         </div>
         <div className='tag' >
         <i class="fa-solid fa-tag"></i>
         <p style={{paddingLeft: "7px"}}>Obj</p>
         </div>
         
        </div>
        <div className='horizontal-line'>
        </div>
        <div className='assignment'>
          <div className='assignment-name'>
           <h2>FDN-04-DAY-07 Arrays and String</h2>
          </div>
          <div className='coding'>
                <h4>Coding</h4>
          </div>
        </div>
        <div className='detail'>
         <div className='author'style={{    display: "flex"}}>
            <div className='short-form'>
               <h6>VL</h6>
            </div>
            <h3>Vritti Lalwani</h3>
         </div>
         <div className='date'>
         <i class="fa-regular fa-calendar"></i>
         <p>29 Mar, 2022 at 1:00 PM</p>
         </div>
         <div className='conclude'>
         <i class="fa-regular fa-calendar-check" style={{    paddingLeft: "4px"}}></i>
         <p>Concludes on -- - --</p> 
         </div>
         <div className='tag' >
         <i class="fa-solid fa-tag"></i>
         <p style={{paddingLeft: "7px"}}>Obj</p>
         </div>
         
        </div>
        <div className='horizontal-line'>

        </div>
        <div className='assignment'>
          <div className='assignment-name'>
           <h2>Evaluation Recording Submission</h2>
          </div>
          <div className='coding'>
                <h4 style={{color:"#80b52e"}}>Evaluation</h4>
          </div>
        </div>
        <div className='detail'>
         <div className='author'style={{    display: "flex"}}>
            <div className='short-form'>
               <h6>S</h6>
            </div>
            <h3>Subham</h3>
         </div>
         <div className='date'>
         <i class="fa-regular fa-calendar"></i>
         <p>28 Mar, 2022 at 9:30 PM</p>
         </div>
         <div className='conclude'>
         <i class="fa-regular fa-calendar-check" style={{    paddingLeft: "4px"}}></i>
         <p>Concludes on -- - --</p> 
         </div>
         <div className='tag' >
         <i class="fa-solid fa-tag"></i>
         <p style={{paddingLeft: "7px"}}>Frontend</p>
         </div>
         
        </div>
        <div className='horizontal-line'>

        </div>
       
        <div className='assignment'>
          <div className='assignment-name'>
           <h2>Evaluation Recording Submission-Math</h2>
          </div>
          <div className='coding'>
                <h4>Assignment</h4>
          </div>
        </div>
        <div className='detail'>
         <div className='author'style={{    display: "flex"}}>
            <div className='short-form'>
               <h6>S</h6>
            </div>
            <h3>Subham</h3>
         </div>
         <div className='date'>
         <i class="fa-regular fa-calendar"></i>
         <p>28 Mar, 2022 at 7:30 PM</p>
         </div>
         <div className='conclude'>
         <i class="fa-regular fa-calendar-check" style={{    paddingLeft: "4px"}}></i>
         <p>Concludes on -- - --</p> 
         </div>
         <div className='tag' >
         <i class="fa-solid fa-tag"></i>
         <p style={{paddingLeft: "7px"}}>Frontend</p>
         </div>
         
        </div>
        <div className='horizontal-line'>

        </div>
        </div>
    )
}

export default Page4
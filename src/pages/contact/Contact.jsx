import React from 'react'

export default function Contact() {
    return (
        <div>
            <div className='container my-4'>
            <h2>How to Find us</h2>
            <p>If you have any questions, just reach out to any one of us on Linkedin. <br/>
                We will try to answer you as soon as possible.
            </p>
            
            </div>
            <div className='container my-4'>
                <div className='row text-center'>
                    <h1>Co-Founders</h1>
                </div>
                <div className='row text-center my-4'>
                    <div className='col-4'>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEGdkjZsqSBvQ/profile-displayphoto-shrink_800_800/0/1609683161074?e=1643241600&v=beta&t=PxYrE2aoIS_DILVT-ZADbAiZQETJKNCDM3VJX6_m1IA"
                        height="200" width="200" style={{borderRadius:"50%"}}/>
                        <br/>
                        <span><i>Chirag Kumar Sharma</i></span>
                    </div>
                    <div className='col-4'>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQHXaQZh3MzOPg/profile-displayphoto-shrink_800_800/0/1633764244537?e=1643241600&v=beta&t=pyemKOaFy7nWRw1TFDPkRAgbZPU9lALBHXaviAJzfXU"
                        height="200" width="200" style={{borderRadius:"50%"}}/>
                        <br/>
                        <span><i>Manan Chhabra</i></span>
                    </div>
                    <div className='col-4'>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGjqknL1aESsA/profile-displayphoto-shrink_800_800/0/1621717674024?e=1643241600&v=beta&t=Vct7tcZXl3GlU9Mm7RLK8zqxOtO8nMH9od998xjzyPc"
                        height="200" width="200" style={{borderRadius:"50%"}}/>
                        <br/>
                        <span><i>Ekansh Gupta</i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

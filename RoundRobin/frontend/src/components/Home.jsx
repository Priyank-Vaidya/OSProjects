import { Container } from '@mui/material'
import React from 'react'
import Card from './Card'
import CssBaseline from '@mui/material/CssBaseline';
import Header from './Header';
export default function Home() {
    const algorithms = [
        {
            title: "Round Robin",
            description: "The round robin algorithm is a scheduling algorithm that schedules the processes in the order of their arrival in the ready queue.",
            route: "/roundrobins",
            isThreaded:false
        }  
    ]
    return (
        
        <Container style={{marginTop: "30px"}}>
             <CssBaseline />
             <Header/>
            <Container style={{ marginTop: "30px", marginBottom: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
                {algorithms
                    .filter(algorithm => !algorithm.isThreaded)
                    .map((algorithm, index) => (
                        <Card key={index} title={algorithm.title} description={algorithm.description} route={algorithm.route} isThreaded={algorithm.isThreaded} />
                    ))}
            </Container>
            <Container style={{ marginTop: "30px", marginBottom: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
{algorithms.map((algorithm, index) => {
if(algorithm.isThreaded) {
return <Card key={index} title={algorithm.title} description={algorithm.description} route={algorithm.route} isThreaded={algorithm.isThreaded} />
}
})}
</Container>
        </Container>
)
}

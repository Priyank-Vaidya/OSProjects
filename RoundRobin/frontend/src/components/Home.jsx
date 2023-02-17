import { Container } from '@mui/material'
import React from 'react'
import Card from './Card'

export default function Home() {
    const algorithms = [
        {
            title: "Round Robin",
            description: "Round Robin scheduling algorithm is one of the most popular scheduling algorithm which can actually be implemented in most of the operating systems. This is the preemptive version of first come first serve scheduling. The Algorithm focuses on Time Sharing. In this algorithm, every process gets executed in a cyclic way. A certain time slice is defined in the system which is called time quantum. Each process present in the ready queue is assigned the CPU for that time quantum, if the execution of the process is completed during that time then the process will terminate else the process will go back to the ready queue and waits for the next turn to complete the execution.",
            route: "/roundrobins",
            isThreaded:false
        }  
    ]
    return (
        <Container style={{marginTop: "30px"}}>
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

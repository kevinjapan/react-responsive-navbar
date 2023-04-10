import React from 'react'
import NavBar from '../App/NavBar/NavBar'
import ArchitectoNavBarLinks from '../ArchitectoNavBarLinks/ArchitectoNavBarLinks'


const Home = () => {
    return (
        <>
            <h1 className="text-2xl md:text-3xl mb-3">Lorem ipsum dolor sit amet.</h1>
            
            <p className="my-3 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, ducimus doloribus! Modi delectus voluptas quia enim? Adipisci cum quo et rerum accusamus illo. Corporis ratione doloribus voluptatibus. Voluptatem, eos vel! Dolore repellat voluptatem neque deleniti, aliquam, cum, voluptates placeat veniam perspiciatis aperiam quis repudiandae consectetur ex. Molestias esse nihil iure!
            </p>

            <NavBar title="architecto">
                <ArchitectoNavBarLinks/>
            </NavBar>

            <p className="my-3 leading-6">
                Itaque repellat expedita libero, autem facere voluptates voluptas atque qui iste corporis placeat at nemo possimus fuga voluptatem omnis. Omnis, dignissimos!
                Deleniti natus quibusdam totam, eum ea odio inventore a cum possimus non atque quos accusamus culpa corporis distinctio aspernatur perferendis officia.
            </p>
        </>
    )
}

export default Home
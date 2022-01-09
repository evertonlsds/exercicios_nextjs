export function getStaticPaths(){
    return {
        fallback: false,
        paths:[
            { params: {id: '107'} },
            { params: {id: '108'} },
            { params: {id: '109'} },

        ]
    }
}

export  function getStaticProps(){
    return{
        props: {}
    }
}



export default function AlunoPorId(){
    return(
        <div>
            <h1>DetalheAluno</h1>
        </div>
    )
}
export async function getStaticPaths(){
    const resp = await fetch('http://localhost:3000/api/alunos/tutores')
    const ids = await resp.json()

    const paths = ids.map(id => {
        return {params: {id: `${id}`}}
    })

    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps({params}){
    const resp = await fetch(`http://localhost:3000/api/alunos/${params.id}`)
    const aluno = await resp.json()
    return{
        props: {
            aluno
        }
    }
}



export default function AlunoPorId(props){
    return(
        <div>
            <h1>DetalheAluno</h1>
            <ul>
                <li>{props.aluno.id}</li>
                <li>{props.aluno.nome}</li>
                <li>{props.aluno.email}</li>
            </ul>
        </div>
    )
}
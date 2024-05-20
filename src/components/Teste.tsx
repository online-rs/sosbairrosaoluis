import { GetServerSideProps } from 'next';
import prisma from '../lib/db'; // Ajuste a importação de acordo com a estrutura do seu projeto

const names = await prisma.user.findMany();
const valores: string[] = names.map(user=>user.name);



// Componente Teste que recebe as props tipadas
export function Teste() {
    return (
        <div className="d-flex flex-column mt-5">
            <div className="mt-5 text-center">
                <h2>Relação de Usuários:</h2>
                {valores.map((valor, index) =>
            (<li className='' key={index} > {valor}</li>))}

            </div>
        </div>
    );
}

export default Teste;

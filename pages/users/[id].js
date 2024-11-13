import { useRouter } from "next/router"
import styles from './../../styles/user.module.scss'
import MainContainer from "../../components/MainContainer";
export default function User({ user }) {
    const { query } = useRouter();
    return (
        <MainContainer className={styles.user}>
            User with id {query.id}
            <div>
                {user.name}
            </div>
        </MainContainer>
    )
}



export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    return {
        props: {user},
    }
}
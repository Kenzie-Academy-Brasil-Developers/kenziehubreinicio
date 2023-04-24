import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider"


export const ListTecnologys = () => {

    const { user } = useContext(AuthContext)
    const techs = user.techs
    return (
        techs.map((tecnology) => (
            <li key={tecnology.id} className="flex flex-row flex-between">
                <h3>{tecnology.title}</h3>
                <span>{tecnology.status}</span>
            </li>
        ))

    )

}
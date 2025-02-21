import Header from "./Header"
import Box from "./Box"

const Card = ({title}) => {
    return (
        <div className="h-full input-class flex flex-col mx-3 border-none rounded-4xl">
            <Header title={title}/>
            <Box />
        </div>
    )
}

export default Card
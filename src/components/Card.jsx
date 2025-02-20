import Header from "./Header"
import Box from "./Box"

const Card = ({title}) => {
    return (
        <div className="h-full flex flex-col mx-2 border-none rounded-2xl">
            <Header title={title}/>
            <Box />
        </div>
    )
}

export default Card
import {useParams} from 'react-router-dom'
const Browse = () => {
    const {type} = useParams()
    console.log(type)
    return (<h1>Hello</h1>)
}
export default Browse
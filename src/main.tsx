import { Button } from "react-bootstrap";
import Test1 from "./test1";

type MainProps = {
    name: string
}
const Main = (props: MainProps) => {
    const { name } = props;
    return (
        <section className="text">
            {name}
            <div>
                <Button variant="info">自己紹介</Button>
                <Test1 home={""} link={""}></Test1>
            </div>
        </section>
    )
}

export default Main
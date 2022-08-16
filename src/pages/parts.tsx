import "./parts.css"

type PartsProps = {
    image: string;
    title: string;
    content: string;
    anchor: string
}
const Parts = (props: PartsProps) => {
    const { image, title, content, anchor } = props;
    // const image = props.image;
    // const title = props.title
    return (
        <div className="component" id="foge">
            <div id="left-text">
                <img src={image} alt="" />
            </div>
            <div id="right-text">
                <p id={anchor}>{title}</p>
                <hr />
                <p>
                    {content}
                </p>
            </div>
        </div>
    );
};
export default Parts;
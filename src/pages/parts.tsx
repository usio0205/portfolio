import logo from './logo.svg';
type PartsProps = {
    image: string;
    title: string;
    content: string;
}
const Parts = (props: PartsProps) => {
    const { image, title, content } = props;
    return (
        <div className="component">
            <div id="left-text">
                <img src={image} alt="" />
            </div>
            <div id="right-text">
                {title}
                <hr />y
                <p>
             {content}
                </p>
            </div>
        </div>
    );
};
export default Parts;
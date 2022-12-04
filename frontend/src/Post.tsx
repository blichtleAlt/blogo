export interface PostProps {
    title: string,
    id: number,
    author: number,
    text: string
}

export const Post = (props: PostProps) => {
    return(
        <div key={props.id} className="Post">
            <div className="Post-title" >{props.title}</div>
            <div className="Post-author">{props.author}</div>
            <div className="Post-body">{props.text}</div>
        </div>
    );
}

export default Post
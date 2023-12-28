


export default function ProjectDetailsItems({text,title}) {

    return (
        <div className="projectPreview_detail_holder">
            <h3 className="projectPreview_detail">
                {title}
            </h3>
            <h3 className="projectDetails_Items">
                {text}
            </h3>
            
        </div>
    )
    

}
import { Link } from "react-router-dom";
import ProjectDetailsItems from "./projectDetailsItems";
import arrow from '../assets/icons/left-round.svg'


export default function ProjectPreview({project}) {

    if (project) {
        return (
            <div className="projectPreview_container">
                <div className="projectPreview">
                    <h1 className="projectPreview_title">
                        {project.title}
                    </h1>
                    <ProjectDetailsItems title={'مساحت پروژه:'} text={project.project_area + 'متر مربع'}/>
                    <ProjectDetailsItems title={'تعداد واحد‌ها:'} text={project.units_number}/>
                    <ProjectDetailsItems title={'واحد های کامل شده:'} text={project.completed_units_number}/>
                    <ProjectDetailsItems title={'واحد های فروخته شده:'} text={project.sold_units_number}/>
                    <Link className="more_details_link" to={`/${project.id}`}>                   
                        جزئیات بیشتر و ثبت نام
                    </Link>
                </div>
            </div>
        )
    }
    
}
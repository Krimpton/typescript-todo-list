import React from "react";
import "./btn-add-category.scss"


const AddCategory: React.FC = () => {
    return (<div>
        <div className="category wrapper">
            <div className="category-btn">
                <span className="material-icons">add</span>
                <p>Add category</p>
            </div>
        </div>
    </div>)
}

export default AddCategory
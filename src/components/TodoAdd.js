
import React from 'react'
import { useForm } from '../hooks/useForm';




export const TodoAdd = ({ handleAddTodo }) => {


    const [{ description }, handleInputChange, reset] = useForm({
        description: ''
    });


    const handleSubmit = (e) => {

        e.preventDefault();

        if (description.trim().length <= 1) {
            return;
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };


        handleAddTodo( newTodo );
        reset();

    }



    return (
        <>
        
            <form
                onSubmit={handleSubmit}
                className="agregar">

                <input
                    className="form-control input"
                    type="text"
                    name="description"
                    placeholder="Agregar Tarea"
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                >
                </input>

                <button
                    type="submit"
                    className="btn btn-outline-primary boton"
                >
                    Agregar
            </button>

            </form>

        </>
    )
}

import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Details = () => {
    const { actions } = useContext(Context)

    const params = useParams()
    console.log(params.idDelPersonaje)

    useEffect(() => {
        actions.getSingleCharacter(params.idDelPersonaje)
    }, [])

    return (
        <div className="text-center mt-5">
            <p>Detalles de un personaje {params.idDelPersonaje} </p>
        </div>
    )
}

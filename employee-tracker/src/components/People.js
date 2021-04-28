import React from "react";

function People(props) {
    return (
        <>
            <thead>
                <tr className="table-light">
                    <th scope="col">Email</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">State</th>
                </tr>
            </thead>
            <tbody className="table-dark table-striped">
                {props.people.map(person => (
                    <tr key={person.id.value}>
                        <th scope="row">{person.email}</th>
                        <td>{person.name.first}</td>
                        <td>{person.name.last}</td>
                        <td>{person.location.state}</td>
                    </tr>
                ))}
            </tbody>
        </>
    )
}

export default People;
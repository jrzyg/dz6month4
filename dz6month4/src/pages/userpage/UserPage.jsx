import {useForm} from "react-hook-form";
import {useState} from "react";

function UserPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors
        }
    } = useForm()

    const [users, setUsers] = useState([])

    const submit = (values) => {
        setUsers([...users, values]);
        reset();
    };

    const deleteUser = (index) => {
        const updatedUsers = users.filter((_, i) => i !== index);
        setUsers(updatedUsers);
    };

    const clearTable = () => {
        setUsers([]);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>
                    <input type="text" placeholder="name"
                           className={errors.name && "error"}
                           {...register("name", {required: true})}/>
                </label>
                <label>
                    <input type="text" placeholder="lastname"
                           className={errors.lastname && "error"}
                           {...register("lastname", {required: true})}/>
                </label>
                <label>
                    <input type="text" placeholder="email"
                           className={errors.email && "error"}
                           {...register("email", {required: true})}/>
                </label>
                <label>
                    <input type="text" placeholder="phone"
                           className={errors.phone && "error"}
                           {...register("phone", {required: true})}/>
                </label>
                <label>
                    <input type="text" placeholder="website" {...register("website")}/>
                </label>

                <button>создать</button>
                <button type="button" onClick={clearTable}>Очистить таблицу</button>
            </form>

            {
                users.length === 0 ? (
                    <p>Таблица пуста</p>
                ) : (
                    <table>
                        {
                            users.map((user, index) => (
                                    <p key={index}>
                                        <span className="user-info">
                                            {user.name}
                                            {user.lastname}
                                            {user.email}
                                            {user.phone}
                                            {user.website}
                                        </span>
                                        <button onClick={() => deleteUser(index)}>Удалить</button>
                                    </p>
                                )

                            )
                        }
                    </table>
                )
            }
        </div>
    );
}

export default UserPage;
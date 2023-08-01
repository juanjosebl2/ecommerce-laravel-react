import useStore from "../hooks/useStore"

export const Category = (props) => {

    const { handleClickCategorie, categorieCurrent } = useStore();
    const {icon, id, name} = props.category;

    return (
        <button 
            className={`${categorieCurrent.id === id ? "bg-amber-400" : 'bg-white'} flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
            type="button"
            onClick={() => handleClickCategorie(id)}
        >
            <img
                alt="image category"
                src={`/img/icono_${icon}.svg`}
                className='w-12'
            />
            <p className=' text-lg font-bold cursor-pointer truncate'>{name}</p>
        </button>
    )
}

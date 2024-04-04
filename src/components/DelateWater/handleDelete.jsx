import { useWater } from 'hooks/useWater';

function DeleteWater() {
  const { reps, deleteWater } = useWater();

  const handleDelete = (event) => {
    const id = event.currentTarget.dataset.id;
    const filteredReps = reps.filter((id) => id !== id);
    deleteWater(filteredReps);
  };

  return (
    <ul>
      {reps.map((reps) => (
        <li key={reps.id}>
          {reps.text}
          <button onClick={handleDelete} data-id={reps.id}>
            {`${svg}#icon-trash`}
          </button>
        </li>
      ))}
    </ul>
  );
};

import { useWater } from 'hooks/useWater';

function DeleteWater() {
  const { reps, deleteWater } = useWater();

  const handleDelete = () => {
    const filteredReps = reps.filter((id) => id !== id);
    deleteWater(filteredReps);
  };

  return (
    <ul>
      {reps.map((reps) => (
        <li key={reps.id}>
          {reps.text}
          <button onClick={handleDelete} data-id={reps.id}></button>
        </li>
      ))}
    </ul>
  );
}

export default DeleteWater;

import './App.css'
import useAsync from './Hooks/useAsync';

function App() {
  const { execute, status, value, error } = useAsync(fetchUsers, false);

  return (
    <div>
      <h1>Приклад завантаження користувачів</h1>
      {status === "idle" && <div>Натисніть кнопку для завантаження користувачів</div>}
      {status === "pending" && <div>Завантаження...</div>}
      {status === "success" && (
        <ul>
          {value.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
      {status === "error" && <div style={{ color: "red" }}>{error}</div>}

      <button onClick={execute} disabled={status === "pending"}>
        {status !== "pending" ? "Завантажити користувачів" : "Завантаження..."}
      </button>
    </div>
  );
}

const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("Помилка при завантаженні користувачів");
  }
  return response.json();
};

export default App

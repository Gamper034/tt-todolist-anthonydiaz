import useFetch from "./useFetch";
import TaskItem from "./TaskItem";

function TaskList() {
  const { data, loading, error } = useFetch(
    "https://my-json-server.typicode.com/groupevaleco/tt-fake-todolist/tasks"
  );

  if (loading) return <h1>Loading....</h1>;
  if (error) console.log(error);

  return (
    <div>
      <h1>Test Valeco</h1>
      <ul>
        {data
          ? data.map((task) => {
              <TaskItem key={task.id} task={task} />;
            })
          : console.log("toto")}
      </ul>

      {console.log(data)}

      {/* {data && data.map((task) => console.log(task.title))} */}
    </div>
  );
}

export default TaskList;

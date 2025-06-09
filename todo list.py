tasks = []

def showTasks():
    if not tasks:
        print("No tasks.")
    else:
        for i, task in enumerate(tasks):
            status = "✔" if task['done'] else "✗"
            print(f"{i+1}. {task['task']} [{status}]")

while True:
    print("\n1. Add Task\n2. View Tasks\n3. Delete Task\n4. Mark as Completed\n5. Exit")
    choice = input("Choose an option: ")

    if choice == "1":
        taskName = input("Enter task: ")
        tasks.append({"task": taskName, "done": False})
    elif choice == "2":
        showTasks()
    elif choice == "3":
        showTasks()
        index = int(input("Enter task number to delete: ")) - 1
        if 0 <= index < len(tasks):
            del tasks[index]
        else:
            print("Invalid index.")
    elif choice == "4":
        showTasks()
        index = int(input("Enter task number to mark as completed: ")) - 1
        if 0 <= index < len(tasks):
            tasks[index]['done'] = True
        else:
            print("Invalid index.")
    elif choice == "5":
        break
    else:
        print("Invalid option.")
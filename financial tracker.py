transactions = []
balance = 0

def addTransaction(amount, type_, description):
    global balance
    if type_ == "income":
        balance += amount
    elif type_ == "expense":
        balance -= amount
    transactions.append((type_, amount, description))

def showBalance():
    print(f"\nCurrent Balance: ${balance:.2f}")

def showHistory():
    print("\nTransaction History:")
    for t in transactions:
        print(f"{t[0].capitalize()}: ${t[1]:.2f} - {t[2]}")

while True:
    print("\n1. Add Income\n2. Add Expense\n3. Show Balance\n4. View History\n5. Exit")
    choice = input("Choose an option: ")

    if choice == "1":
        amt = float(input("Enter income amount: "))
        desc = input("Enter description: ")
        addTransaction(amt, "income", desc)
    elif choice == "2":
        amt = float(input("Enter expense amount: "))
        desc = input("Enter description: ")
        addTransaction(amt, "expense", desc)
    elif choice == "3":
        showBalance()
    elif choice == "4":
        showHistory()
    elif choice == "5":
        break
    else:
        print("Invalid option.")
def calculateGrade(avg):
    if avg >= 90:
        return 'A'
    elif avg >= 80:
        return 'B'
    elif avg >= 70:
        return 'C'
    elif avg >= 60:
        return 'D'
    else:
        return 'F'

name = input("Enter student name: ")
marks = []

for i in range(5):
    mark = float(input(f"Enter mark for subject {i+1}: "))
    marks.append(mark)

average = sum(marks) / 5
grade = calculateGrade(average)

print(f"\n{name}'s Average: {average:.2f}")
print(f"Grade: {grade}")
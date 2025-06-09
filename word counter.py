from collections import Counter

text = input("Enter a sentence or paragraph: ")
words = text.lower().split()

wordCount = Counter(words)
totalWords = sum(wordCount.values())
mostCommon = wordCount.mostCommon(1)[0]

print(f"\nTotal words: {totalWords}")
print("Word frequencies:")
for word, count in wordCount.items():
    print(f"{word}: {count}")

print(f"\nMost frequent word: '{mostCommon[0]}' ({mostCommon[1]} times)")
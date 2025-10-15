# Task
# 🧮 Day-wise Sum Calculator (JavaScript)

This project contains a JavaScript function that processes a dictionary (object) where each key is a date (`YYYY-MM-DD`) and each value is an integer.  
It returns a new dictionary that groups values by weekday (`Mon–Sun`) and fills any missing days using the mean of their adjacent days.

---

## 📘 Task Description

Given a dictionary `D`:

- Each key is a date string (e.g., `2020-01-01`)
- Each value is an integer

The function should return a new dictionary such that:

1. Keys are weekdays: `[Mon, Tue, Wed, Thu, Fri, Sat, Sun]`
2. Values are the sum of all input values for that weekday
3. Missing weekdays are filled with the **mean** of the previous and next available weekdays

---

## 🧠 How It Works

### 1. Convert each input date to its weekday (Mon–Sun)
Each date key (in `YYYY-MM-DD` format) is converted into its corresponding weekday name using JavaScript’s `Date` object.  
For example:  
`'2020-01-01'` → **Wednesday** → `'Wed'`

---

### 2. Sum all values for each weekday  
If multiple dates fall on the same weekday, their values are **added together**.  
Example:  
If `'2020-01-01'` and `'2020-01-08'` are both Wednesdays, their values are summed.

---

### 3. Handle missing weekdays  
If a weekday is missing in the input, its value is estimated as the **mean (average)** of its previous and next available weekday values.  

**Example:**  
If `Thu` and `Fri` are missing, and  
`Wed = 6`, `Sat = 12`,  
then:
- `Thu = (6 + 12) / 2 = 9`  
- `Fri = (9 + 12) / 2 = 10.5 ≈ 10`

---

### 4. Return the final dictionary  
The function outputs a dictionary with weekdays in order:  
`{ Mon, Tue, Wed, Thu, Fri, Sat, Sun }`  
and each key’s value represents the sum (or computed mean) for that day.

---

## 🧩 Example

**Input**
```javascript
{
  '2020-01-01': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-06': 2,
  '2020-01-07': 4
}

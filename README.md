# Expense Manager 

**Opis w jednym zdaniu:**  
Prosty i intuicyjny menedżer finansów osobistych — pozwala na dodawanie przychodów i wydatków, kategoryzowanie transakcji oraz śledzenie dostępnych środków w czasie rzeczywistym.

---

## 🌐 Live Demo  
Zobacz działającą wersję online:  
 [**https://jj99wrocc.github.io/Expense-Manager/**](https://jj99wrocc.github.io/Expense-Manager/)

---

##  Funkcjonalności

- **Dodawanie transakcji:**  
  - Przychody i wydatki z możliwością wyboru kategorii (np. Zakupy, Jedzenie, Kino).
  - Wprowadzenie nazwy, kwoty oraz kategorii transakcji.

- **Podgląd transakcji:**  
  - Lista wszystkich dodanych transakcji z podziałem na przychody i wydatki.

- **Śledzenie dostępnych środków:**  
  - Automatyczne obliczanie dostępnej kwoty na podstawie dodanych transakcji.

- **Stylizacja i interaktywność:**  
  - Responsywny design z możliwością zmiany motywu kolorystycznego.

---

##  Technologie

- **HTML5** – struktura i semantyka strony.  
- **CSS / SCSS** – stylizacja i responsywność.  
- **JavaScript (vanilla)** – logika działania aplikacji.  
- **GitHub Pages** – hosting aplikacji jako statycznej strony.

---

##  Uruchomienie lokalne

Projekt działa od razu w przeglądarce — bez potrzeby instalacji
Przykład użycia

Formularz dodawania transakcji:

<form id="transactionForm">
  <label for="name">Nazwa:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="amount">Kwota:</label>
  <input type="number" id="amount" name="amount" required>
  
  <label for="category">Kategoria:</label>
  <select id="category" name="category" required>
    <option value="income">Przychód</option>
    <option value="shopping">Zakupy</option>
    <option value="food">Jedzenie</option>
    <option value="cinema">Kino</option>
  </select>

Możliwości rozwoju

Dodanie edycji i usuwania transakcji.

Filtrowanie transakcji po kategoriach i datach.

Eksport danych do plików CSV lub PDF.

Integracja z API do automatycznego pobierania kursów walut.

Dodanie systemu logowania i rejestracji użytkowników.

 Co się nauczyłem

Tworzenie aplikacji webowej z interaktywnym formularzem.

Praca z lokalnym przechowywaniem danych (np. localStorage).

Stylizacja aplikacji z wykorzystaniem SCSS.

Publikacja aplikacji na GitHub Pages.

Autor: Joachim Esangbedo

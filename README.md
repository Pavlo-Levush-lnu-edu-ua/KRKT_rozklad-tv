3D CSV Viewer

Python-програма для побудови інтерактивної 3D-поверхні на основі даних із CSV-файлу.

Програма використовує:

pandas — для читання та обробки CSV;
plotly — для побудови інтерактивної 3D-поверхні.
Features
Читання даних із CSV-файлу.
Побудова інтерактивної 3D-поверхні.
Поворот та масштабування 3D-графіка.
Відображення значень при наведенні курсора.
Кольорова шкала для значення omega.
Симетрична кольорова шкала відносно 0.
Власна назва графіка через аргумент --title.
Перевірка структури CSV та наявності пропущених значень.
Data format

Програма очікує CSV-файл із трьома колонками:

eTheta_deg,dF,omega
-90.00,0.00,-63.88354613
-90.00,0.25,-63.88354613
-90.00,0.50,-63.88354613
-90.00,0.75,-63.88354613
...

Columns
Column	Description
eTheta_deg	Кут eTheta у градусах
dF	Значення dF
omega	Значення, яке використовується як координата Z

3D-модель будується таким чином:

X = dF
Y = eTheta_deg
Z = omega

Requirements
Python 3.13+
pandas
plotly
Installation

Клонувати репозиторій:

git clone <YOUR_REPOSITORY_URL>
cd 3d_csv_viewer


Створити virtual environment:

Windows
python -m venv venv


Активувати:

venv\Scripts\activate


Встановити залежності:

python -m pip install --upgrade pip
pip install -r requirements.txt

Usage

Основний запуск:

python main_1.py --file data.csv


З власною назвою графіка:

python main_1.py --file data.csv --title "Мій експеримент"


Можна вказати повний шлях до CSV:

python main_1.py --file "D:\Data\experiment.csv"


або:

python main_1.py --file "D:\Data\experiment.csv" --title "Experiment 01"

Command line arguments
Argument	Required	Description
--file	Yes	Шлях до CSV-файлу
--title	No	Назва 3D-графіка

Приклад:

python main_1.py --help

Virtual environment

Віртуальне середовище venv не потрібно додавати до Git-репозиторію.

Для відтворення середовища на іншому ПК використовується:

python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

Project structure
3d_csv_viewer/
│
├── main_1.py
├── requirements.txt
├── README.md
├── data.csv
└── venv/


Папку venv/ не потрібно завантажувати на GitHub.

Git

Рекомендується створити .gitignore:

venv/
__pycache__/
*.pyc
.idea/
.vscode/


Після цього можна створити Git-репозиторій:

git init
git add .
git commit -m "Initial commit"


Після створення репозиторію на GitHub додайте remote:

git remote add origin <YOUR_REPOSITORY_URL>


і виконайте:

git branch -M main
git push -u origin main

License

Вкажіть потрібну ліцензію для проєкту, наприклад MIT License.

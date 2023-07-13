# Hello, Im Prass

This is aplication from learning about react but i am use react in laravel so i am must be use Inertia in
laravel, this is how to install this project to your localy, you must be follow step by step :). and before you
start please make sure in your localy have composer, laravel and npm :).

<b>First you need have laragon ang code editor and then<b/>

-   open your laragon and make new database with name [learn_resep_app]
-   open project in your code editor

## Installation

-   rename [.env.example] to [.env]
-   open [.env] in aplication and rename DB_DATABASE value to [learn_resep_app]
-   in [APP_URL] set the value to [http://localhost:8000]
-   add [FILESYSTEM_DISK=public] in new line

in terminal write this and enter

```
composer install
php artisan migrate:fresh --seed
php artisan keu:generate
```

and then add new terminal, in terminal 1 write this and enter

```
php artisan serve
```

in terminal 2 write this and enter

```
npm install
npm run dev
```

last open your browser and open this link [localhost:8000]

if you have problem you can contact me in whatssapp [082279092168] or email [prastyopratama01@gmail.com]

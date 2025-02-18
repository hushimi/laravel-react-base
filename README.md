# 参考

-   [Laravel Breeze 認証+Ineatia+React でアプリケーション構築するための基礎](https://reffect.co.jp/laravel/laravel-breeze-react#google_vignette)
-   [Object の生成](https://qiita.com/yu_jin/items/77fc2a2501a3c0565026)

# command

-   新機能作成

```bash
php artisan make:model Blog -a

# model, Factory, Migration, Seeder, Request, Controller, Policy
# が同時に作成される
```

# Memo

-   Javascript では Function も Object

-   Seeder について

    -   Factory で生成する seeder の定義
    -   Seeder で Factory の数を指定
    -   `php artisan db:seed`でテストデータ作成

-   useForm: Inertia+React 環境で FormRequest を使いやすくする機能
-   useForm({Form に設定している Input 要素})

```javascript
const {
    data, // Stores your form values
    setData, // Updates form values
    post, // Submits form data
    processing, // Tracks submission status
    errors, // Holds validation errors
    reset, // Resets form to initial state
} = useForm({
    email: "", // Initial empty email field
    password: "", // Initial empty password field
    remember: false, // Initial unchecked remember me
});
```

-   traditional way of assigning

```javascript
const result = useForm(initialState);
const data = result.data;
const setData = result.setData;
const post = result.post;
const processing = result.processing;
const errors = result.errors;

// Using the functions
setData("field", "value");
post("/api/endpoint");
```

-   Object Destructuring pattern

```javascript
const { data, setData, post, processing, errors } = useForm(initialState);

// Using the functions
setData("field", "value");
post("/api/endpoint");
```

-   Renamed properties pattern

```text
This pattern allows you to rename the properties as you extract them.
It's useful when you need to avoid naming conflicts or make variable names more descriptive.
The original property names come from useForm, while the new names are what you'll use in your code.
```

```javascript
const {
    data: formData,
    setData: updateData,
    post: submitForm,
    processing: isLoading,
    errors: validationErrors,
} = useForm(initialState);

// Using the renamed functions
updateData("field", "value");
submitForm("/api/endpoint");
```

-   tailwind css class too long solution

```text
// globals.css
@layer components {
  .btn {
    @apply flex justify-center items-center text-sm font-medium rounded-md
           px-4 py-2 transition-colors;
  }

  .btn-primary {
    @apply btn bg-blue-600 text-white hover:bg-blue-700;
  }
}

// Usage
<button class="btn-primary">Click me</button>
```

```react
<div className={`
  group
  rounded-lg
  border
  border-transparent
  px-5
  py-4
  transition-colors

  hover:border-gray-300
  hover:bg-gray-100
  hover:dark:border-neutral-700
  hover:dark:bg-neutral-800/30
`}>
  Content
</div>
```

-   MultiAuth

-   [参考](https://reffect.co.jp/laravel/breeze_multi_auth#i)

1. `php artisan make:model -m`でモデルファイルとマイグレーションファイル作成
2. Model, Migration を users テーブルと同様に編集
3. テーブル作成後、config/auth.php にて guards, providers,paswords に admin 用の設定追加
4. routes/auth.php をコピー, admin.php を作成。名前空間等修正
5. web.php に読み込ませる
6. app/Http/Controllers/Auth を app/Http/Controllers/Admin/Auth にコピー
7. Controller の名前空間修正

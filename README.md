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
8. login 前、login 後のリダイレクト設定(config/app.php)、Middleware の追加
9. Mail の日本語化

## tailwind css class too long

```javascript
import clsx from "clsx";

function Button() {
    return (
        <button
            className={clsx(
                "flex items-center justify-center",
                "rounded-md bg-blue-500 px-4 py-2",
                "text-sm font-medium text-white",
                "hover:bg-blue-600",
                "focus-visible:outline focus-visible:outline-2",
                "focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            )}
        >
            Click Me
        </button>
    );
}
```

# 使用 JS ライブラリ

-   Shadcn/ui
-   clsx(長いクラス名を見やすくする)

# Shadcn/ui メモ

-   [Reffect shadcn/ui 解説](https://reffect.co.jp/react/shadcn-react)
-   Slot:Merges its props onto its immediate child. As Child を true にする
-   CVA(class-variance-authority Library)

```txt
cva は Class Variant Authority の略で’class-variance-authority’ライブラリから import している関数です。
Button コンポーネントの variant の値を”outline”, size の値を”lg”に設定するとボタンのデザインが変更になったのは
cva の設定を行っているためです。

cva 関数 の第一引数にはベースの class, 第二引数には options を設定することができます。
options には variants, compoundVariants, defaultVariatns のオブジェクトを設定することができます。
variants オブジェクトの中では選択できる値を定義します。
引数に何も指定しない場合は defaultVariants の値が利用されます。

compoundVariants は intent の値が primary, size に medium が指定された場合に class で設定した値が追加されます。
```

-   twmerge, clsx

```javascript
// clsx だけではなコンフリクトした class を merge することはできないので
// tailwind-merge と一緒に利用することで以下のようにコンフリクトのない class にすることができます。
twMerge(clsx("px-4 py-2", "p-3", { "bg-red-500": true }));
```

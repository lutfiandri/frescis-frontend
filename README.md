<h1 align="center">
  FresCis Frontend
</h1>
<p align="center">Website FresCis | Senior Project</p>

<br>

<!-- ## Related Repository

- Frontend Repo: [https://github.com/lutfiandri/teti-lib-frontend](https://github.com/lutfiandri/teti-lib-frontend) (current)
- Backend Repo: [https://github.com/lutfiandri/teti-lib](https://github.com/lutfiandri/teti-lib) -->

<!-- ## Links

- Slide Presentasi: [Click Here](https://www.canva.com/design/DAFSQCxxR6Q/3yai7zDDPaF2WBaAPU3OfA/view?utm_content=DAFSQCxxR6Q&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#1)
- Front End: https://teti-library.vercel.app/
- Back End: https://teti-lib.vercel.app/
- Postman Docs: [Click Here](https://documenter.getpostman.com/view/23529898/2s8YzS1iXv) -->

## Development Setup

### Prerequisites

- [Download](https://nodejs.org/en/download/) and install **Node.js** version `18.15` or higher.

### Setting Up Project

- Clone this repository
- Open with your favorite code editor
- Install required dependencies:

  ```bash
  npm install
  ```

- Run the program:

  ```bash
  # on development
  npm run dev
  ```

- Happy coding

## Branch Naming

`<type>/<short_description>`

- `<type>` :
  - feature: saya menambahkan fitur baru
  - fix: saya memperbaiki fitur

contoh: feature/menambahkan-navbar <br/>
[Learn More](https://nvie.com/posts/a-successful-git-branching-model/)

## Commit Messages

`<type>(scope): <short_summary>` <br/>
[Baca lebih lengkap](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)

## Folder Structure

```
- docs                 # asset dokumentasi
- public               # bisa diakses public (menyimpan gambar)
- src
  - components
    - ui               # component element satuan
    - templates        # component template yang dapat digunakan berulang kali
  - layouts            # layout -> digunakan berulang kali untuk base suatu halaman
  - pages              # halaman - halaman
  - styles             # styling dan tema
  - utils
    - helpers          # helper function
    - hooks            # react hook
    - services         # fetcher dari api
    - constants        # constant variables
```

## Import Path Mapping

Gunakan path mapping. `@` akan me-mapping-kan ke src. Contoh:

```javascript
import Home from '@/pages/Home.jsx';
import Button from '@/components/elements/Button.jsx';
```

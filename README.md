# <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" width="28px" /> Google API Example

Simple example using Flask and PyJWT.

## Requirements

- Python 3.8 or newer.
- Google API client ID.

## Usage

### Prerequisites

You must first obtain your Google API client ID.

- Open the **Credentials** page in [Google API Console](https://console.cloud.google.com/apis).
- Click **Create Credentials > OAuth client ID** for application type select **Web application** to create a new client ID.
- Add the URI of your website to **Authorized JavaScript origins**. For example, `https://www.example.com`.

> [!NOTE]
> For local tests add `http://localhost` and `http://localhost:<port_number>`.

Then you need to configure your OAuth Consent Screen.

- Open [OAuth consent screen](https://console.cloud.google.com/apis/credentials/consent) page of the APIs & Services section.
- If prompted, select the project you just created.
- On the "OAuth consent screen" page, fill out the form and click the "Save" button.

> [!NOTE]
> In **Your non-sensitive permissions** select all.
> In **User type** select **External** then in the **Test users** section you simply add the emails you wish to test.

### Installation

You will need Flask and PyJWT to run. To install them follow these steps.

```bash
pip install Flask
```

```bash
pip install PyJWT
```

Then just clone the repository.

```bash
git clone https://github.com/Frknk/google-api-example
```

> [!TIP]
> Dont forget to modify `templates/index.html` with your current ID.

### Run

Simply execute.

```bash
python main.py
```

> [!IMPORTANT]
> To work correctly you must use `http://localhost:<port_number>/`.

## References

- [Sign In with Google for Web](https://developers.google.com/identity/gsi/web/guides/overview)
- [Setting up your OAuth consent screen](https://support.google.com/cloud/answer/10311615/)

## License

This project is licensed under the [MIT License](https://github.com/Frknk/google-api-example/blob/main/LICENSE) 



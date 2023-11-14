import Page from '../Page/Page';
import AppHeader from '../AppHeader/AppHeader';
import Content from '../Content/Content';

function Error() {
  return (
    <Page>
      <AppHeader />
      <Content
        title="Erreur"
        text="Nous sommes désolé, Une erreur s'est produite."
      />
    </Page>
  );
}

export default Error;

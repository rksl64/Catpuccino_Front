import ReactPDF, {
  Document,
  Font,
  Image,
  Page,
  Text,
  View,
} from "@react-pdf/renderer";
import logito from "../assets/logito.jpg";
import barrita from "../assets/img/barrita_separadora.png";
import { Styles as styles } from "../Utils/style-pdf";
export const PDFDOC = ({ reserva, data }) => (
  <Document>
    <Page style={styles.body}>
      <View style={styles.header}>
        <View style={styles.caja1}>
          <Text style={styles.title}>Catpuccino</Text>
          <Text style={styles.author}>Cat Café</Text>
        </View>
        <View style={styles.caja2}>
          <Text style={styles.title}>Factura</Text>
          <Text style={styles.author}>22/2/2024</Text>
        </View>
      </View>
      <View style={styles.caja3}>
        <Text style={styles.data}>Datos del cliente</Text>
        <Text style={styles.author}>
          {reserva.usuarioDTO.nombre} {reserva.usuarioDTO.apellidos}
        </Text>
        <Text style={styles.author}>{reserva.usuarioDTO.email}</Text>
        <Text style={styles.author}>{reserva.usuarioDTO.telefono}</Text>
      </View>
      <View>
        <Text style={styles.text}>
          {data[0].cantidad}
          En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
          mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
          antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que
          carnero, salpicón las más noches, duelos y quebrantos los sábados,
          lentejas los viernes, algún palomino de añadidura los domingos,
          consumían las tres partes de su hacienda. El resto della concluían
          sayo de velarte, calzas de velludo para las fiestas con sus pantuflos
          de lo mismo, los días de entre semana se honraba con su vellori de lo
          más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una
          sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que
          así ensillaba el rocín como tomaba la podadera. Frisaba la edad de
          nuestro hidalgo con los cincuenta años, era de complexión recia, seco
          de carnes, enjuto de rostro; gran madrugador y amigo de la caza.
          Quieren decir que tenía el sobrenombre de Quijada o Quesada (que en
          esto hay alguna diferencia en los autores que deste caso escriben),
          aunque por conjeturas verosímiles se deja entender que se llama
          Quijana; pero esto importa poco a nuestro cuento; basta que en la
          narración dél no se salga un punto de la verdad
        </Text>
      </View>
      <View style={styles.footer}>
        <Image src={barrita}></Image>
        <Text style={styles.title}>Datos de contacto</Text>
        <View style={styles.contacto}>
        <Text style={styles.author}>catpuccino@gmail.com</Text>
        <Text style={styles.author}>954676869</Text>
        </View>
      </View>

     
    </Page>
  </Document>
);

Font.register({
  family: "Oswald",
  src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

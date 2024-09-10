# Projekt: Hotel Buchungsoberfläche

---
## Kontext und Einordnung

Unser Team wurde beauftragt eine Buchungsapp zu entwickeln, die Benutzer auf dem Smartphone und dem Desktop verwenden werden.
Es werden bis zu 100 Besucher pro Tag erwartet, d.h. die bestehende Infrastruktur reicht für die Performance anforderungen aus.
Besonders Augenmerk, soll auf die moderne und nachhaltige Umsetzung der App gelegt werden, da diese in den kommenden Jahren mit weiteren Features erweitert werden soll.
Wesentlich ist dem Auftraggeber auch ein roter Faden in der Usability und im Stylingkonzept.

Das Backend wurde bereits von unserem PhP Team umgesetzt und steht unter `https://boutique-hotel.helmuth-lammer.at` zur verfügung.
Die Dokumentation findet sich in diesem Dokument.

Es besteht die Aufgabe eine Hotelbuchungsapp für das Boutique-Hotel Technikum umzusetzen. Dabei soll es den Gästen möglich sein
Hotelzimmer für einen bestimmten Zeitraum zu buchen, wenn es die entsprechende Auslastung zulässt. Die Gäste können sich
auch registrieren um für zukünftige ihre Personenangaben wiederzuverwenden oder Ihre Buchungen einzusehen.

Das Projekt wird mit Trainings (Lehreinheiten) begleitet, um eventuelle Knowhow lücken am Weg zum Projektziel zu schließen.

---
### Technische Anforderungen

Die App soll mit vue-js (Version 3) umgesetzt werden und mithilfe des Frameworks vue-bootstrap (Oder gleichwertig) rasch umgesetzt werden.
Die Library Axios soll für API Calls verwendet werden. Für ein modernes State-Handling wird Pinia zu verwenden sein.

Die Anwendung wird besonders für Mobile Endgeräte entwickelt, soll aber auch am Desktop bedienbar sein.

---
<div style="page-break-after: always;"></div>

## API Spezifikation

### **GET** rooms

`https://boutique-hotel.helmuth-lammer.at/api/v1/rooms`

Example Result
```json
  [
    { 
      "id": 1,
      "roomNumber":  11,
      "roomName": "Junior Suite",
      "beds": 3,
      "pricePerNight": 120,
      "extras": {
        "bathRoom": true,
        "minibar": true,
        "television": true,
        "aircondition": true
      }
    },
    {
     ...
    }
  ]
```

---
<div style="page-break-after: always;"></div>

### **GET** available rooms
`https://boutique-hotel.helmuth-lammer.at/api/v1/room/{roomId}/from/{from-date}/to/{to-date}`

Check availability

Example Call:
`https://boutique-hotel.helmuth-lammer.at/api/v1/room/2/from/2022-12-10/to/2022-12-14`

Example Result
```json
{
  "state": 200
}
```

---
<div style="page-break-after: always;"></div>

### **POST** book room
`https://boutique-hotel.helmuth-lammer.at/api/v1/room/{roomId}/from/{from-date}/to/{to-date}`

Book Room

Example Call:
`https://boutique-hotel.helmuth-lammer.at/api/v1/room/2/from/2022-12-10/to/2022-12-14`

Data:
```json
{
	"firstname": "Franz",
	"lastname": "Xaver",
	"email": "franz@example.com",
	"birthdate": "1999-10-04"
}
```

Example Result
```json
{
  "id": 1234
}
```

---
<div style="page-break-after: always;"></div>

### **POST** register user
`https://boutique-hotel.helmuth-lammer.at/api/v1/register`

Zu übertragen

```json

{
  "firstname": String,
  "lastname": String,
  "email": String,
  "username": String,
  "password": String
}
```

Example Result (reiner Text)
```text
1|PzId1xtCY3myLtqLAfSNKBtMsppVBB08b2FMYhq5
```

---
<div style="page-break-after: always;"></div>

### **GET** user with bookings
`https://boutique-hotel.helmuth-lammer.at/api/v1/user/`

Authentication token mit übertragen:
api/use
```
    Authorization: Bearer {token}
    Accept: Application/json
```

```json
{
  "firstname": String,
  "lastname": String,
  "email": String,
  "birthdate": String (Format: YYYY-MM-DD),
  "username": String,
  "bookings": [
    {
      "roomId": Number,
      "startDate": Date,
      "endDate": Date
    },
    {
      ...
    }
  ]
}
```

---
<div style="page-break-after: always;"></div>

### **GET** bookings history
`https://boutique-hotel.helmuth-lammer.at/api/v1/user/bookings`

Voraussetzung: gültiger Token wurde im Header übertragen

```
    Authorization: Bearer {token}
    Accept: Application/json
```



Example Result

```json
  [
  {
    "booking": {
      "id": 1234,
      "from": "YYYY-MM-DD",
      "to": "YYYY-MM-DD"
    },
    "room": {
      "id": 1,
      "roomNumber": 11,
      "roomName": "Junior Suite",
      "beds": 3,
      "pricePerNight": 120,
      "extras": {
        "bathRoom": true,
        "minibar": true,
        "television": true,
        "aircondition": true
      }
    }
  },
  {
    ...
  }
]
```

---
<div style="page-break-after: always;"></div>

### **POST** login as user
`https://boutique-hotel.helmuth-lammer.at/api/v1/login`

zu Übertrage

```json
{
  "clientId": String (E-Mail Address),
  "secret": String (Passowrd)
}
```

Antwort
ist ein JWT oder ein Fehler

---
<div style="page-break-after: always;"></div>

### Authentication Configuration

```json
...
    header: {
        Authorization: Bearer <token>
        Accept: Applilcation/json
    }
```

---
TestLinks:

- Übersicht aller Bookings:
    - https://boutique-hotel.helmuth-lammer.at/api/v1/bookings
- Übersicht über alle Gäste
    - https://boutique-hotel.helmuth-lammer.at/api/v1/guests

---
<div style="page-break-after: always;"></div>

## User Stories


### U1: Hotelwebsite
> Als `Gast` möchte ich `in Form einer Website das Hotel präsentiert bekommen` um `mich darüber zu informieren`.

#### Details

Die Single Page Application enthält neben den Funktionen zur Buchung und Verwaltung auch statische Seiten, die den Besucher einerseits einladen das Hotel genauer anzusehen und andererseits solche Informationen bereitstellen, dass der Besucher weiß, was ihn vor, während und nach erfolgreicher Buchung erwartet.

#### Recommended Approach

- Definieren Sie, welche Informationen für die Präsentation des Hotels bereitgestellt werden müssen
- Aufbereiten der Informationen, Recherche und bereitstellen von Bildern
- Erstellen sie für jede Page eine Komponente

---
<div style="page-break-after: always;"></div>


#### Definition of Done

- [ ] die HTML-Templates für die statischen Pages (zumindest Landingpage, Impressum, About) wurden erstellt
- [ ] Texte und Inhalte wurden aufbereitet und eingepflegt
- [ ] die einzelnen Seiten können aufgerufen und im Browser korrekt angezeigt werden
- [ ] die Inhalte sind sowohl auf einem Smartphone, als auch auf einem Desktop Gerät gut angeordnet und lesbar

---
<div style="page-break-after: always;"></div>

### U2: Hotelzimmer Auswahl
> Als `Gast` möchte ich `eine Übersicht über Hotelzimmer und die zugehörigen Details sehen können`, um `mir nach meinen Vorstellungen ein Zimmer auszusuchen.`

#### Details

Es besteht eine API Schnittstelle über die Informationen zu den Zimmern abgerufen werden können. Diese ist in der API Dokumentation zu finden.
Im Ordner `images/rooms` des Repositories finden sich Bilder. Die Dateinamen entsprechen der jeweiligen Zimmer id. Es kann sein, dass die Bilder nicht alle gleich groß sind. Finden Sie auch dafür eine Lösung.
Zu den Extras sollen Aussagekräftige Icons gestellt werden, damit der Benutzer sich gut zurechtfindet. Es sollen beim ersten Laden maximal 5 Hotelzimmer angezeigt werden.
Das heißt, es bedarf einer Lösung, wie man eine ungerade Zahl an Zimmern gut darstellt und wie man auf Seite 2 (und später evtl. 3 und 4 - ein Zubau von Zimmern ist für das kommende Jahr geplant) wechseln kann.

#### Recommended Approach

- Machen Sie sich mit der Schnittstelle vertraut
- Analyse der Rückgabe Daten
- Paperprototype für die Anzeige und das Paging
- Welche Interaktionen sind notwendig?
- Machen Sie sich mit den [bootstrap icons](https://www.npmjs.com/package/bootstrap-icons-vue) vertraut
- Wenn sie ein anderes Designsystem einsetzen, machen Sie sich mit den Icons dort vertraut
- Wählen Sie Icons für die Extras aus
- Verwenden Sie für die Pagination Buttons s.g. Buttongroups

---
<div style="page-break-after: always;"></div>


#### Definition of Done

- [ ] Hotelzimmer können mit Bild, Titel, Beschreibung und Extras angezeigt werden
- [ ] Auf Seite eins werden 5 Hotelzimmer angezeigt
- [ ] Es ist möglich weitere Seiten anzuzeigen: Pagination
- [ ] Die Extras werden mit Icons versehen, die das Extra repräsentieren
- [ ] Das Feature wurde in einem eigenen Branch eingecheckt und ins Git-Repository gepusht
- [ ] Das Feature wurde nach einem Code Review in den Master gemerged

---
<div style="page-break-after: always;"></div>

### U3: Verfügbarkeit prüfen

> Als `Gast` möchte ich `überprüfen ob ein bestimmtes Zimmer zum meinem gewünschten Reisezeitraum verfügbar ist`, um `festzustellen, ob ich das Zimmer werde buchen können`.

#### Details

Es besteht eine API Schnittstelle über die Informationen zu den Zimmern abgerufen werden können. Diese ist in der API Dokumentation zu finden.
Der Benutzer soll in der Oberfläche die Möglichkeit haben, seinen Buchungszeitraum zu definieren. Sie haben hier freie Hand, wie sie das dem Benutzer am besten darstellen.
Denken Sie innovativ und out of the box dabei.

#### Recommended Approach

- Machen Sie sich mit der Schnittstelle vertraut
- Analyse der Rückgabe Daten
- Bilden Sie zwei bis drei Varianten, wie man dem Benutzer den Zeitraum definieren lassen könnte, wie man die Zimmerverfügbarkeit darstellt, etc.
- Denken Sie auch den Userflow, bzw. das Usecase Szenario durch, welcher Fehlerfälle gibt es
- Überlegen Sie, wie sie neue Komponenten entwerfen müssen, oder alte erweitern / ändern, damit Ihre Idee des GUI auch aus Implementierungssicht gut umsetzbar ist
- Bauen Sie zuerst den Store und die API Anbindung und dann das GUI

---
<div style="page-break-after: always;"></div>


#### Definition of Done

- [ ] Der Benutzer kann über einen Datumsdialog den Zeitraum der Buchung festlegen
- [ ] der Benutzer bekommt klares Feedback über die Verfügbarkeit in diesem Zeitraum
- [ ] Mögliche Fehlerfälle werden abgefangen und der Benutzer entsprechend darauf hingewiesen
- [ ] Das Feature wurde in einem eigenen Branch eingecheckt und ins Git-Repository gepusht
- [ ] Das Feature wurde nach einem Code Review in den Master gemerged

---
<div style="page-break-after: always;"></div>

### U4: Hotelzimmer reservieren

> Als `Gast` möchte ich `zu einem ausgewählten Zeitraum ein ausgewähltes Zimmer buchen` um `eine Unterkunft in meinem Urlaub zu haben`.

#### Details

Es besteht eine API Schnittstelle um eine Buchung zu einem Zimmer durchführen zu können. Diese ist in der API Dokumentation zu finden.
Nachdem der Benutzer ein verfügbares Zimmer gefunden hat, soll er es Buchen können. Er muss dazu folgende Daten angeben:

- Vorname
- Nachname
- gültige E-Mail-Adresse
- E-Mail-Adresse bestätigen
- Frühstück Ja / Nein

Er soll vor dem endgültigen Absenden, nochmal die Möglichkeit haben, seine Buchungsdaten (inkl. Buchungszeitraum und Zimmerwahl) zu überprüfen und ggf. zu bearbeiten.
Nach erfolgter Buchung muss dem Benutzer eine Bestätigung angezeigt werden.

#### Recommended Approach

- Machen Sie sich mit der Schnittstelle vertraut
- Analyse der zu übertragenden Daten
- Paperprototype inkl. Userflow und Errorhandling
- Bauen Sie zuerst den Store und die API Anbindung und dann das GUI

---
<div style="page-break-after: always;"></div>


#### Definition of Done

- [ ] Der Benutzer kann zu einem gewünschten Zeitraum ein gewünschtes Zimmer unter Angabe seiner vollständigen und korrekten Daten Buchen, wenn das Zimmer verfügbar ist
- [ ] Mögliche Fehlerfälle werden abgefangen und der Benutzer entsprechend darauf hingewiesen
- [ ] Der Benutzer kann seine daten vor Absenden nochmal überprüfen
- [ ] Der Benutzer erhält eine Bestätigung nach erfolgreicher Buchung
- [ ] Das Feature wurde in einem eigenen Branch eingecheckt und ins Git-Repository gepusht
- [ ] Das Feature wurde nach einem Code Review in den Master gemerged

---
<div style="page-break-after: always;"></div>

### U5: Reservierungsbestätigung verbessern

> Als `Gast` möchte ich `nach der Buchung erfahren, ob diese erfolgreich oder fehlerhaft war` um `zu wissen ob ich meinen Prozess beenden kann, oder weitere Schritte nötig sind.`

#### Details

Die in U4 angesprochene Buchungsbestätigung soll erweitert werden, um den Benutzer ausführlich über alle Details zu informieren und ihm die Anreise und das Einchecken zu erleichtern.
Die Details der Buchung sollen anzeigt werden:
- Der Zeitraum
- Das Hotelzimmer inkl. Bild, Titel, Extras und Beschreibung
- Seine Daten, die er angegeben hat
- Anfahrtsbeschreibung zum Hotel, und eventuelle weiter Informationen (Zugverbindungen)
- Kontaktmöglichkeiten

#### Recommended Approach

- Überlegen Sie welche Informationen sonst noch notwendig sind (außer hier beschriebene)
- Paperprototype der Ausgabe
- Können Komponenten wieder verwendet werden?
- Kann man Google Maps oder Ähnliches einbinden für die Anfahrt? Gibt es da Packages, was benötigt man dazu?

---
<div style="page-break-after: always;"></div>

#### Important Comment

Diese Userstory markiert (wenn 1-4 auch erledigt sind) den ersten Milestone und damit ersten Release. Wir erreichen damit V1.0.0

#### Definition of Done

- [ ] Die Bestätigung wird mit den in der Sektion Details beschriebenen Informationen erweitert
- [ ] Die Bestätigung soll möglichst auf A4 Ausdruckbar sein (drucken aus Browser reicht, kein PDF Umwandlung nötig)
- [ ] Es gibt ein klares Ergebnis zum Thema Anfahrtsplan: Umsetzung, je nach Recherche Ergebnis
- [ ] Das Feature wurde in einem eigenen Branch eingecheckt und ins Git-Repository gepusht
- [ ] Das Feature wurde nach einem Code Review in den Master gemerged
- [ ] V1.0.0 wurde released (tagging)

---
<div style="page-break-after: always;"></div>

### U6: Registrierung

> Als `Gast` möchte ich `mich registrieren können`, `damit ich meine Daten wieder verwenden kann und meine Buchungshistorie aufrufen kann`.

#### Details

Es besteht eine API Schnittstelle um eine Registrierung durchführen zu können. Diese ist in der API Dokumentation zu finden.
Der Benutzer soll, während, vor oder nach der Buchung die Möglichkeit haben sich zu registrieren. Dies ermöglicht es ihm in späterer Folge
- sine Buchungen abzufragen und
- er muss seine Daten bei erneuter Buchung nicht mehr angeben

Zur Registrierung benötigen wir folgende Daten
- Vorname
- Nachname
- E-Mail
- Passwort
- Passwort Bestätigen

Er wird dadurch also ins Kundenregister aufgenommen. Für die Registrierung erhält er eine Bestätigung (Bildschirm Anzeige reicht. E-Mail nicht notwendig).

#### Recommended Approach

- Machen Sie sich mit der Schnittstelle vertraut
- Analyse der zu übertragenden Daten
- Welche Fehlerfälle gibt es
- Überlegen Sie zu welchem Zeitpunkt sie dem Benutzer die Registrierung anbieten wollen
- Paperprototype inkl. Userflow und Errorhandling (mobile first)
- Bauen Sie zuerst den Store und die API Anbindung
- dann die Implementierung der neuen Komponente

---
<div style="page-break-after: always;"></div>


#### Definition of Done

- [ ] Der Benutzer kann sich mit den von der API geforderten Daten Registrieren
- [ ] und erhält bei Erfolg eine Bestätigung (Anzeige)
- [ ] Das Feature wurde in einem eigenen Branch eingecheckt und ins Git-Repository gepusht
- [ ] Das Feature wurde nach einem Code Review in den Master gemerged

---
<div style="page-break-after: always;"></div>

### U7: Login
> Als `registrierter Gast` möchte ich `mich am Portal anmelden können`, damit ich `bei einer erneuten Buchung, meine Daten nicht mehr eingeben muss und meine Buchungen anzeigen kann`.

#### Details

Es besteht eine API Schnittstelle um sich anmelden zu können. Diese ist in der API Dokumentation zu finden.
Sie erhalten von dieser Schnittstelle einen JWT, welcher ab dann bei jedem Request zu übertragen ist.

Dem Benutzer soll sichtbar gemacht werden, ob er angemeldet ist oder nicht.

#### Recommended Approach

- Machen Sie sich mit der Schnittstelle vertraut
- Analyse der zu übertragenden Daten
- Welche Fehlerfälle gibt es
- Wie kann man die bestehenden API-Schnittstellen entsprechend erweitern, um den JWT korrekt zu übertragen

---
<div style="page-break-after: always;"></div>

#### Definition of Done

- [ ] Der Login kann durchgeführt werden
- [ ] Der Benutzer sieht auf jeder Page, ob er angemeldet ist
- [ ] Jeder API Call ist um den JWT erweitert, wenn der Benutzer angemeldet ist
- [ ] Alle Calls funktionieren mit und ohne Token übertragung
- [ ] Das Feature wurde in einem eigenen Branch eingecheckt und ins Git-Repository gepusht
- [ ] Das Feature wurde nach einem Code Review in den Master gemerged

---
<div style="page-break-after: always;"></div>

### U8: Buchungs-Historie Anzeigen (Optional)

> Als `registrierter Gast` möchte ich `meine vergangenen und aktuellen Buchungen ansehen können`, um `einen Überblick zu haben, welche Zimmer ich früher hier gebucht hatte.`

#### Details

Es besteht eine API Schnittstelle, um als autorisierter Benutzer Buchungen zu lesen. Diese ist in der API Dokumentation zu finden.
Der Benutzer, wenn er angemeldet ist, soll eine Liste seiner vergangenen und aktuellen Buchungen sehen können. Dabei soll darauf geachtet werden,
dass für den Benutzer klar ist, welche vergangen und welche zukünftig sind und welches Zimmer in welchem Zeitraum gebucht war.

Diese Userstory markiert (wenn 1-7 auch erledigt sind) den zweiten Milestone und damit den zweiten Release. Wir erreichen damit V2.0.0

#### Recommended Approach

- Machen Sie sich mit der Schnittstelle vertraut
- Analyse der Daten der Rückgabe
- Können bestehende Komponenten wiederverwendet werden?
- Paperprototype
- Implementierung

---
<div style="page-break-after: always;"></div>


#### Definition of Done

- [ ] Ein angemeldeter Benutzer kann seine bestehenden Buchungen einsehen
- [ ] Das Feature wurde in einem eigenen Branch eingecheckt und ins Git-Repository gepusht
- [ ] Das Feature wurde nach einem Code Review in den Master gemerged
- [ ] V2.0.0 wurde released (tagging)

---
# Milestones und Deadlines

Es sind drei Milestones definiert. Diese sind in der Tabelle unten beschrieben.

| Milestone | Tasks              | Deadline              | Peer Review  | 
|-----------|--------------------|-----------------------|--------------|
| 1         | Paperprototype, U1 | bis LE4               | Ja           |
| 2         | U2-U4              | bis LE6               | Ja           |
| 3         | U5-U7              | +1 Woche nach LV Ende | Nein         |


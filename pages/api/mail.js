const { isEmail, isEmpty } = require('validator');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.MAIL_API_KEY);

export default async function sendMail(req, res) {
  if (req.method !== 'POST') {
    return res.status(401).send('Fail');
  }
  if (!(req.body.name && req.body.email && req.body.message)) {
    return res.status(403).send('Fail');
  }
  const name = req.body.name.trim();
  const email = req.body.email.trim();
  const message = req.body.message.trim();
  if (isEmpty(name) || isEmpty(message) || !isEmail(email)) {
    return res.status(403).send('Fail');
  }
  const ownerMessage = `<!DOCTYPE html>
	<html lang="en" style="color-scheme: light only;padding: 0px;border-left-width: 0px;border-right-width: 0px;border-top-width: 0px;border-bottom-width: 0px;margin-top: 0px;margin-right: 0px;margin-left: 0px;margin-bottom: 0px;width: 100%;">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<style>
				html {
					border-color:black;
					color-scheme: light only;
					padding: 0px;
					border-left-width:0px;
					border-right-width:0px;
					border-top-width:0px;
					border-bottom-width:0px;
					margin-top:0px;
					margin-right:0px;
					margin-left:0px;
					margin-bottom:0px;
					width:100%;
				}
				body {
					border-color:black;
					padding: 0px;
					color-scheme: light only;
					border-right-width:0px;
					border-left-width:0px;
					border-top-width:0px;
					border-bottom-width:0px;
					margin-top:0px;
					font-size:15px;
					margin-right:0px;
					margin-left:0px;
					margin-bottom:0px;
					width: 100%;
					justify-content: center;
					text-align: center;
				}
				p,
				h1,h2 {
					color-scheme: light only;
					text-align: center;
					font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
						"Lucida Sans", Arial, sans-serif;
					color: black !important;
				}
			</style>
		</head>
		<body style="padding: 0px;color-scheme: light only;border-right-width: 0px;border-left-width: 0px;border-top-width: 0px;border-bottom-width: 0px;margin-top: 0px;margin-right: 0px;margin-left: 0px;margin-bottom: 0px;width: 100%;justify-content: center;text-align: center;">
			<table cellspacing="0" cellpadding="10" border="0" style="
					background-color: white;
					font-size:15px;
					color-scheme: light only;
					text-align: center;
					width: 100%;
					box-sizing: border-box;
					border-left-width:0px;
					border-right-width:0px;
					border-top-width:0px;
					border-bottom-width:0px;
					margin-top:0px;
					margin-right:0px;
					margin-left:0px;
					margin-bottom:0px;
					min-height: 100vh;
					color:black;
				">
			<tr style="text-align:center">
				<td style="text-align: center;">
				<img src="https://hasathcharu.com/greylogo.png" alt="Hasathcharu Logo" style="width:90%;max-width: 22rem; text-align: center;margin-bottom:2rem;">
				<p style="color-scheme: light only;text-align: center;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black !important; font-size:25px; max-width:700px; margin:auto;font-size:15px;">${name} contacted you on hasathcharu.com</p><br/><br/>
				<p style="text-align: justify;color-scheme: light only;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black;max-width:700px; margin:auto;font-size:15px;">
					Dear Haritha,
				</p><br/>
				<p style="text-align: justify;color-scheme: light only;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black;max-width:700px; margin:auto;font-size:15px;">
					Someone contacted you via the hasathcharu.com web form. The message is as follows.<br/><br/>Name : ${name}<br/><br/>Email : ${email}<br/><br/>Message: <br/><br/>
					${message}<br/><br/>
					End of Message.<br/><br/>
				</p>
				<p style="font-size:15px;text-align: justify;color-scheme: light only;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black;max-width:700px; margin:auto;">
					Regards,<br />
					hasathcharu.com
				</p>
				<br><br>
				<p style="color-scheme: light only;text-align: center;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black !important;max-width:700px; margin:auto;">&#169; Haritha Hasathcharu</p>
				<br><br>
				</td>
				</tr>
			</table>
		</body>
	</html>`;
  const contactorMessage = `<!DOCTYPE html>
	<html lang="en" style="color-scheme: light only;padding: 0px;border-left-width: 0px;border-right-width: 0px;border-top-width: 0px;border-bottom-width: 0px;margin-top: 0px;margin-right: 0px;margin-left: 0px;margin-bottom: 0px;width: 100%;">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<style>
				html {
					border-color:black;
					color-scheme: light only;
					padding: 0px;
					border-left-width:0px;
					border-right-width:0px;
					border-top-width:0px;
					border-bottom-width:0px;
					margin-top:0px;
					margin-right:0px;
					margin-left:0px;
					margin-bottom:0px;
					width:100%;
				}
				body {
					border-color:black;
					padding: 0px;
					color-scheme: light only;
					border-right-width:0px;
					border-left-width:0px;
					border-top-width:0px;
					border-bottom-width:0px;
					margin-top:0px;
					margin-right:0px;
					font-size:15px;
					margin-left:0px;
					margin-bottom:0px;
					width: 100%;
					justify-content: center;
					text-align: center;
				}
				p,
				h1,h2 {
					color-scheme: light only;
					text-align: center;
					font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
						"Lucida Sans", Arial, sans-serif;
					color: black !important;
					font-size:15px;
				}
			</style>
		</head>
		<body style="padding: 0px;color-scheme: light only;border-right-width: 0px;border-left-width: 0px;border-top-width: 0px;border-bottom-width: 0px;margin-top: 0px;margin-right: 0px;margin-left: 0px;margin-bottom: 0px;width: 100%;justify-content: center;text-align: center;">
			<table cellspacing="0" cellpadding="10" border="0" style="
					background-color: white;
					color-scheme: light only;
					text-align: center;
					width: 100%;
					box-sizing: border-box;
					border-left-width:0px;
					border-right-width:0px;
					font-size:15px;
					border-top-width:0px;
					border-bottom-width:0px;
					margin-top:0px;
					margin-right:0px;
					margin-left:0px;
					margin-bottom:0px;
					min-height: 100vh;
					color:black;
				">
			<tr style="text-align:center">
				<td style="text-align: center;">
				<img src="https://hasathcharu.com/greylogo.png" alt="Hasathcharu Logo" style="width:90%;max-width: 22rem; text-align: center;margin-bottom:2rem;">
				<p style="color-scheme: light only;text-align: center;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black !important; font-size:25px; max-width:700px; margin:auto;">Thank you for visiting hasathcharu.com</p><br/><br/>
				<p style="text-align: justify;color-scheme: light only;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black;max-width:700px; margin:auto;font-size:15px;">
					Dear ${name},
				</p><br/>
				<p style="text-align: justify;color-scheme: light only;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black;max-width:700px; font-size:15px;margin:auto;">
						Your message has been received by Haritha, and he will contact you as
	    				soon as possible if needed. For further inquiries, feel free to contact Haritha
	    				again. Thank you very much for reaching hasathcharu.com.
				</p><br/><br/>
				<p style="text-align: justify;font-size:15px;color-scheme: light only;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black;max-width:700px; margin:auto;">
					Regards,<br />
					hasathcharu.com
				</p>
				<br><br>
				<p style="color-scheme: light only;font-size:15px;text-align: justify;font-size:12px;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black !important;max-width:700px; margin:auto;">Disclaimer : You have received this email because you filled a contact form at hasathcharu.com. However if you didn\'t contact hasathcharu.com, please ignore this email, and rest assured, you won\'t be put in to any mailing list.<br/><br/></p>
				<p style="color-scheme: light only;text-align: center;font-family: \'Trebuchet MS\', \'Lucida Sans Unicode\', \'Lucida Grande\',
						\'Lucida Sans\', Arial, sans-serif;color: black !important;max-width:700px; margin:auto;">&#169; Haritha Hasathcharu</p>
				<br><br>

				</td>
				</tr>
			</table>
		</body>
	</html>`;
  try {
    const ownerMail = await sgMail.send({
      from: {
        email: 'no-reply@hello.hasathcharu.com',
        name: 'Hasathcharu',
      },
      to: 'haritha@hasathcharu.com',
      subject: name + ' contacted you',
      html: ownerMessage,
    });
    const contactorMail = await sgMail.send({
      from: {
        email: 'no-reply@hello.hasathcharu.com',
        name: 'Hasathcharu',
      },
      to: email,
      subject: 'Thank you for reaching me',
      html: contactorMessage,
    });
  } catch (error) {
    console.log(error);
    return res.status(403).send('Fail');
  }
  return res.status(200).send('Success');
}

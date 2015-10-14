package com.example.mywebsite;
import javax.servlet.*;
import javax.servlet.http.*;

import java.io.IOException;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public class SendEmail extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public void service (HttpServletRequest req, HttpServletResponse resp)throws IOException, ServletException{

		Properties props = new Properties();
		Session session = Session.getDefaultInstance(props, null);

		String body =req.getParameter("body");
		String to="nitish2794@gmail.com";//req.getAttribute("to").toString();
		String frommail=req.getParameter("fromemail");//req.getAttribute("from").toString();
		String from="nitish2794@gmail.com";
		//req.getAttribute("subject").toString();
		String admin="Nitish Srivastava";//req.getAttribute("admin").toString();
		String user=req.getParameter("fromname");;//req.getAttribute("user").toString();
		String sub="From nitish-srivastava.appspot.com:"+user+":"+req.getParameter("subject");
		String msgBody ="Hi Nitish,this mail is sent to you by "+user+".\nEmail : "+frommail+"\nMessage :"+body;

		try {
			Message msg = new MimeMessage(session);
			msg.setFrom(new InternetAddress(from, admin));
			msg.addRecipient(Message.RecipientType.TO,
					new InternetAddress(to, user));
			msg.setSubject(sub);
			msg.setText(msgBody);
			Transport.send(msg);
			req.getRequestDispatcher("/index.html").forward(req, resp);


		} catch (AddressException e) {
			// ...
		} catch (MessagingException e) {
			// ...
		}



	}

}

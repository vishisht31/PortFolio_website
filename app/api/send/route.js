import { Resend } from 'resend';
import * as React from 'react';
import { NextResponse } from "next/server";

const resend = new Resend('re_AfaxHP1e_5yjBsvp9xcnZNcHFqEU3ZVmy');

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['vishishtmaroria31@gmail.com'],
      subject: "Hello world",
      react: (
        <div>
            <h1>hgha</h1>
            <p>Thank you for contacting us!</p>
            <p>New message submitted: </p>
            <p>p</p>
        </div>
      ),
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
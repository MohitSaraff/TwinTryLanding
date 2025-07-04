import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { demoRequestSchema, contactMessageSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Demo request submission
  app.post("/api/demo-request", async (req, res) => {
    try {
      const parseResult = demoRequestSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ 
          message: "Invalid request data", 
          errors: parseResult.error.format() 
        });
      }
      
      const demoRequest = await storage.createDemoRequest(parseResult.data);
      
      return res.status(201).json({ 
        message: "Demo request submitted successfully", 
        data: demoRequest 
      });
    } catch (error) {
      console.error("Error submitting demo request:", error);
      return res.status(500).json({ message: "Failed to submit demo request" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const parseResult = contactMessageSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ 
          message: "Invalid request data", 
          errors: parseResult.error.format() 
        });
      }
      
      const contactMessage = await storage.createContactMessage(parseResult.data);
      
      return res.status(201).json({ 
        message: "Contact message sent successfully", 
        data: contactMessage 
      });
    } catch (error) {
      console.error("Error sending contact message:", error);
      return res.status(500).json({ message: "Failed to send contact message" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

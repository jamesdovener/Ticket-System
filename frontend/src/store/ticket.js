import {create} from 'zustand'

export const useTicketStore = create((set) => ({
    tickets: [],
    setTickets: (tickets) => set({ tickets }),
    createTicket: async(newTicket) => {
        if(!newTicket.title || !newTicket.description || !newTicket.category || !newTicket.status || !newTicket.priority){
            return {success: false, message: "All fields are required"}
        }
        console.log(newTicket);
        console.log(JSON.stringify(newTicket));
        const res = await fetch("/api/tickets", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket),
        });
        const data = await res.json();
        set((state) => ({tickets: [...state.tickets, data.data]}));
        return {success: true, message: "Ticket created successfully"};
        
    },
    fetchTickets: async() => {
        const res = await fetch("/api/tickets");
        const data = await res.json();
        set({tickets: data.data});
    }
}));
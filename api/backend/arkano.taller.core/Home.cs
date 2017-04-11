namespace arkano.taller.core
{
    using System;
    using System.Linq;
    using System.Security.Cryptography;
    using System.Text;

    public class Home
    {
        private string text = "Rock & Roll!!";

        public Home()
        {
            Console.WriteLine(this.text);
        }

        public string Text { get => this.text; set => this.text = value; }
    }
}
